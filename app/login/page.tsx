"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md md:max-w-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-6">
          Login to your Account
        </h2>

        {/* Email & Password Fields */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email/Phone</label>
            <Input
              type="text"
              placeholder="Email Or Phone"
              className="w-full px-4 shadow-md py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <p className="text-xs text-gray-400 mt-1">Use country code before number</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              placeholder="********"
              className="w-full px-4 shadow-md py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex justify-between items-center">
            <Link href="#" className="text-sm text-accent hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button className="w-full bg-accent hover:bg-accent/80 text-white">
            Login to your Account
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative flex justify-center items-center">
            <span className="px-4 bg-white text-gray-500">Or Login With</span>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-accent hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
