import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
