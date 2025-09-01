import { SignInForm } from "@/components/auth/signin-form"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url(/images/ethereal-background.png)" }}
      />
      {/* Metallic Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/95 to-black/90"></div> */}
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
