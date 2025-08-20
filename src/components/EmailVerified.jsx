import { useEffect } from "react";
import supabase from "../utils/supabase";

const EmailVerified = () => {
  useEffect(() => {
    const insertJobseeker = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { error } = await supabase.from("jobseeker").insert([
          {
            id: user.id,
            firstname: user.user_metadata.firstname || "",
            lastname: user.user_metadata.lastname || "",
            email: user.email,
            education: user.user_metadata.education || "",
            skills: user.user_metadata.skills || "",
            experience: user.user_metadata.experience || "",
            resume: "Random text for now",
          },
        ]);

        if (error) {
          console.error("Insert error:", error.message);
        } else {
          console.log("Jobseeker info inserted successfully!");
        }
      }
    };

    insertJobseeker();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-green-600">
        ✅ Email Verified Successfully!
      </h1>
      <p className="text-gray-600">
        Your account is now active. You can login.
      </p>
    </div>
  );
};

export default EmailVerified;
