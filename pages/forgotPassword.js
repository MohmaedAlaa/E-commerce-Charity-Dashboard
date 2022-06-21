import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-screen flex w-full">
        <div className="hidden lg:block relative flex-1 w-1/2">
          <Image
            className=" h-full w-full object-cover"
            src="/Layer 2.svg"
            layout="fill"
          />
        </div>

        <div className="relative flex-1 flex flex-col justify-center py-12 sm:px-6 lg:flex-none lg:px-12 xl:px-12 w-1/2">
          {/* <div className="absolute text-[#707082] font-medium top-24 right-24 w-full ml-[700px]">
            <a href="#" className=''>
              <LanguageIcon className="mb-1" /> Deutsch
            </a>
          </div> */}
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-bold">Forgot Password</h2>
            </div>

            <div className="mt-16">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[#707082]"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[10px] shadow-sm text-sm font-medium text-white bg-[#3D897A] hover:bg-[#3D897A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D897A]"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}