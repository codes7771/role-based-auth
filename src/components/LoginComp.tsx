"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export function Logincomp() {

    const params = useSearchParams();

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<LoginErrorType>({});

  const submitForm = async () => {
    setLoading(true);

    console.log("Your submitted Values are: ", authState);

    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status == 200) {
          console.log("");
        } else if (response?.status == 400) {
          setErrors(response?.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Something went wrong");
      });
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Now you dont have to rely on your designer to create a new page
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Commercial License{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Unlimited Exports{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    120+ Coded Blocks{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Design Files Included{" "}
                  </span>
                </li>
              </ul>
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
                {params.get("message") ? (
                    <p className="bg-green-500 p-4 rounded-md">{params.get("message")}</p>
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
                        setAuthState({ ...authState, email: e.target.value })
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
                        setAuthState({ ...authState, password: e.target.value })
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
                <Link href="/login" className="hover:underline">
                  Already have an account? Login
                </Link>
              </CardFooter>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}

