import { connect } from "@/database/mongo.config";
import JSONAPIErrorReporter from "@/validator/ErrorReporter";
import { loginSchema } from "@/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/model/User";

connect();

export async function POST(request: NextRequest) {
  try {
    //Get data
    const body = await request.json();

    //Compiler for schema
    const validator = vine.compile(loginSchema);

    validator.errorReporter = () => new JSONAPIErrorReporter();

    //validation
    const output = await validator.validate(body);

    //finding the user data
    const user = await User.findOne({email: output.email});

    if (user){
        //Check Password - returns a boolean value
        const checkPassword = bcrypt.compareSync(output.password!, user.password);

        if (checkPassword){
            return NextResponse.json({
                status: 200,
                message: "User Logged in",
            },{status: 200})
        }

        return NextResponse.json({
            status: 400,
            message: "Please check your credentials",
        },{status: 200})
    }

    return NextResponse.json({
        status: 400,
        errors: {
            email : "No Account found with this email"
        }
    }, {status: 200});
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
