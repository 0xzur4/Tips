// app/register/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Mode = "login" | "signup";

export default function RegisterPage() {
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // only for signup
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        // call signup API
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, username })
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data?.error ? JSON.stringify(data.error) : "Signup gagal");
          setLoading(false);
          return;
        }
        // setelah signup sukses, langsung login otomatis (opsional) atau arahkan ke login
        const sign = await signIn("credentials", {
          redirect: false,
          email,
          password
        });
        if (sign?.error) {
          setError("Signup berhasil, tapi login otomatis gagal. Silakan login.");
          router.push("/register"); // tetap di halaman
        } else {
          // redirect ke dashboard user by username
          router.push(`/user/${encodeURIComponent(username)}`);
        }
      } else {
        // login mode
        const sign = await signIn("credentials", {
          redirect: false,
          email,
          password
        });
        if (sign?.error) {
          setError("Email atau password salah");
        } else {
          // dapatkan username dari session via endpoint atau asumsi username dalam session callbacks
          // karena Auth callback menaruh username di session.user.username
          // redirect ke dashboard (bisa panggil /api/session untuk ambil username)
          // untuk kesederhanaan, redirect ke /user/me lalu server-side redirect ke username OR
          router.push("/user/me"); // implementasikan /user/me untuk resolve current user -> redirect
        }
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("signup")}
          className={`px-4 py-2 ${mode === "signup" ? "bg-blue-600 text-white" : "border"}`}
        >
          Signup
        </button>
        <button
          onClick={() => setMode("login")}
          className={`px-4 py-2 ${mode === "login" ? "bg-blue-600 text-white" : "border"}`}
        >
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {mode === "signup" && (
          <div>
            <label className="block text-sm">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={mode === "signup"}
              className="mt-1 w-full border p-2 rounded"
            />
          </div>
        )}

        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full border p-2 rounded"
          />
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div>
          <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">
            {loading ? "Memproses..." : mode === "signup" ? "Signup & Login" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
