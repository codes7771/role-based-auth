//src/app/(auth)/login/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";

export default function SignInOne() {
  const searchParam = useSearchParams();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setError] = useState<LoginErrorType>();

  useEffect(() => {
    console.log("The query is", searchParam.get("error"));
  }, []);

  //   * Submit the data
  const submitForm = async () => {
    setLoading(true);
    axios
      .post("/api/auth/login", authData)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        console.log("The response is ", response);
        if (response.status == 200) {
          console.log("The user signed in", response);
          signIn("credentials", {
            email: authData.email,
            password: authData.password,
            callbackUrl: "/",
            redirect: true,
          });
        } else if (response.status == 400) {
          setError(response?.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error is", err);
      });
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full  object-cover object-top"
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Next js Authentication process
              </h3>
              <h2 className="text-white text-xl font-semibold mt-10">
                Production label Authentication with validations
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <Card className="max-w-[400px] p-5">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-3xl">Sign In</p>
                  <p className="text-small text-default-500">Encreators.</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                {searchParam.get("message") ? (
                    <p className="bg-green-500 p-4 rounded-md">{searchParam.get("message")}</p>
                ): (
                    <></>
                )}
                <form action="#" method="post">
                  
                  <div className="space-y-6 mt-5">
                    <Input
                      size="md"
                      type="email"
                      label="Email"
                      onChange={(e) =>
                        setAuthData({ ...authData, email: e.target.value })
                      }
                    />
                    <span
                      className="
                    text-red-500"
                    >
                      {errors?.email}
                    </span>
                  </div>
                  <div className="space-y-6 mt-5">
                    <Input
                      size="md"
                      type="password"
                      label="Password"
                      onChange={(e) =>
                        setAuthData({ ...authData, password: e.target.value })
                      }
                    />
                    <span
                      className="
                    text-red-500"
                    >
                      {errors?.password}
                    </span>
                  </div>
                  <div className="space-y-6 mt-8">
                    <Button
                      color="primary"
                      className="w-full"
                      onClick={submitForm}
                    >
                      {loading ? "Processing" : "Register"}
                    </Button>
                  </div>
                </form>
              </CardBody>
              <CardFooter>
                <Link href="/register" className="hover:underline" color="primary">
                  Don&apos;t have an account? Register
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
