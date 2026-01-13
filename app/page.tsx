import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Contact Manager</h1>
          <p className="text-lg text-gray-600">
            Manage your contacts efficiently and effortlessly.
          </p>
          <Image
            src="/contact-manager-illustration"
            alt="Contact Manager Illustration"
            width={600}
            height={400}
            className="mt-8 mx-auto"
          />
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Start managing your contacts by logging in or registering an account.
          </p>
          
        </div>
    </div>
  );
}
