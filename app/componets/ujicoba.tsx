// ComponentsGrid.tsx
const items = [
  { title: "Page headers",    count: 6 },
  { title: "Card headers",    count: 2 },
  { title: "Section headers", count: 7 },
  { title: "Section footers", count: 4 },
  { title: "Sidebar navigations", count: 5 },
  { title: "Header navigations",  count: 2 },
  { title: "Modals",          count: 46 },
  { title: "Command menus",   count: 9 },
  { title: "Line & bar charts", count: 4 },
  { title: "Activity gauges", count: 4 },
];

export default function ujiCoba() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Components</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <button
            key={item.title}
            className="
              group flex flex-col overflow-hidden rounded-xl border border-slate-200
              bg-white shadow-sm hover:shadow-md transition-shadow
              text-left
            "
          >
            {/* Thumbnail / preview area */}
            <div className="relative h-28 bg-slate-50">
              {/* garis abu tipis di atas seperti contoh */}
              <div className="absolute inset-3 rounded-lg border border-dashed border-slate-200" />
              {/* bar ungu kecil */}
              <div className="absolute top-4 left-4 h-2 w-16 rounded-full bg-purple-500" />
            </div>

            {/* Text area */}
            <div className="px-4 py-3">
              <p className="font-medium text-slate-900 group-hover:text-purple-600">
                {item.title}
              </p>
              <p className="text-sm text-slate-500">
                {item.count} components
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
