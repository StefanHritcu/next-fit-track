"use client";

import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createClient } from "@supabase/supabase-js";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const supabaseUrl = "https://qjlmyymlqfkcryioeazd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbG15eW1scWZrY3J5aW9lYXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4Mzc2OTAsImV4cCI6MjA0NDQxMzY5MH0.imE42wsLh1NaxFDWWTYo58Q81lGRCchl8-NfuEqouyg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SignUpComponent: FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  // Schemi di validazione per i due step
  const firstStepValidationSchema = Yup.object().shape({
    nickname: Yup.string().required("Nickname required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password required"),
  });

  const secondStepValidationSchema = Yup.object().shape({
    currentWeight: Yup.number()
      .required("Current weight required")
      .positive("Must be a positive number"),
    desiredWeight: Yup.number()
      .required("Desired weight required")
      .positive("Must be a positive number")
      .lessThan(
        Yup.ref("currentWeight"),
        "Your desired weight must be less than your current weight."
      ),
    targetDate: Yup.date().required("Data required"),
  });

  // Inizializzazione di Formik
  const formik = useFormik({
    initialValues: {
      nickname: "",
      password: "",
      currentWeight: "",
      desiredWeight: "",
      targetDate: "",
    },
    validationSchema:
      step === 1 ? firstStepValidationSchema : secondStepValidationSchema,
    onSubmit: async (values) => {
      try {
        const { data, error } = await supabase.from("users").insert([
          {
            nickname: values.nickname,
            password: values.password,
            currentWeight: values.currentWeight,
            desiredWeight: values.desiredWeight,
            targetDate: values.targetDate,
          },
        ]);

        if (error) {
          setRegistrationError(error.message);
        } else {
          console.log("Utente registrato:", data);
          setShowSuccessIcon(true);
          setLoading(true);
          setRegistrationError(null);

          // Attendi 4 secondi prima di reindirizzare
          setTimeout(() => {
            router.push("/user-profile");
          }, 4000);
        }
      } catch (error) {
        console.log("Errore durante l'inserimento:", error);
        setRegistrationError(
          "Errore durante la registrazione. Riprova più tardi."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  // Gestione dei passaggi
  const handleNextStep = () => {
    if (step === 1 && formik.isValid) {
      setStep(2);
    } else if (step === 2) {
      formik.handleSubmit();
    } else {
      formik.setTouched({ nickname: true, password: true });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-8">Create a profile</h2>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {step === 1 ? "Step 1/2" : "Step 2/2"}
        </h1>

        {loading ? (
          <div className="text-center text-gray-700 mb-4">Please wait...</div>
        ) : showSuccessIcon ? (
          // Mostra l'icona di successo con animazione
          <div className="mt-4 text-center">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto animate-spin" />
            <p className="text-gray-700 mt-2">
              Registrazione completata con successo! Reindirizzamento in
              corso...
            </p>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            {step === 1 ? (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nickname
                  </label>
                  <input
                    id="nickname"
                    type="text"
                    {...formik.getFieldProps("nickname")}
                    autoComplete="username"
                    className={`mt-1 p-2 border rounded w-full ${
                      formik.touched.nickname && formik.errors.nickname
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your nickname"
                  />
                  {formik.touched.nickname && formik.errors.nickname && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.nickname}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...formik.getFieldProps("password")}
                    autoComplete="new-password"
                    className={`mt-1 p-2 border rounded w-full ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Create a password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="currentWeight"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Current Weight (kg)
                  </label>
                  <input
                    id="currentWeight"
                    type="number"
                    {...formik.getFieldProps("currentWeight")}
                    className={`mt-1 p-2 border rounded w-full ${
                      formik.touched.currentWeight &&
                      formik.errors.currentWeight
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your weight"
                  />
                  {formik.touched.currentWeight &&
                    formik.errors.currentWeight && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.currentWeight}
                      </div>
                    )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="desiredWeight"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Desired Weight (kg)
                  </label>
                  <input
                    id="desiredWeight"
                    type="number"
                    {...formik.getFieldProps("desiredWeight")}
                    className={`mt-1 p-2 border rounded w-full ${
                      formik.touched.desiredWeight &&
                      formik.errors.desiredWeight
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter desired weight"
                  />
                  {formik.touched.desiredWeight &&
                    formik.errors.desiredWeight && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.desiredWeight}
                      </div>
                    )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="targetDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date to reach ideal weight
                  </label>
                  <input
                    id="targetDate"
                    type="date"
                    {...formik.getFieldProps("targetDate")}
                    className={`mt-1 p-2 border rounded w-full ${
                      formik.touched.targetDate && formik.errors.targetDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formik.touched.targetDate && formik.errors.targetDate && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.targetDate}
                    </div>
                  )}
                </div>
              </>
            )}

            {registrationError && (
              <div className="text-red-500 text-sm mt-2">
                {registrationError}
              </div>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
            >
              {step === 1 ? "Next" : "Sign-Up"}
            </button>
          </form>
        )}
      </div>
      <div>
        <Link href="/login">
          <h2 className="text-lg p-2 text-blue-700 hover:scale-105 transform-transition duration-300 hover:text-blue-500">
            Already registered? Login
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
