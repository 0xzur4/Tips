"use client"
import { Button, TextField } from "@mui/material"
import { Tabs, Tab, Card, CardBody } from "@heroui/react"


export default function SignUp() {
    return (
        <section className="flex flex-col gap-2 justify-center items-center min-h-screen">
            <Tabs aria-label="Options">
                <Tab key="signup" title="Signup" >
                    <Card>
                        <CardBody>
                        <form className="flex flex-col gap-3">
                            <TextField label="Username" variant="standard" />
                            <TextField label="Email" variant="standard" />
                            <TextField label="Password" variant="standard" />
                            <Button >Signup</Button>
                        </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="login" title="Login">
                    <Card>
                        <form className="flex flex-col gap-3">
                            <TextField label="Email" variant="standard" />
                            <TextField label="Password" variant="standard" />
                            <Button >Login</Button>
                        </form>
                    </Card>
                </Tab>
            </Tabs>
        </section>
    )
}