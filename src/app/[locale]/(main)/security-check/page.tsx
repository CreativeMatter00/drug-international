"use client";

import ButtonPrimary from "@/components/ui/button/ButtonPrimary";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const [code, setCode] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleVerifyClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://103.219.160.253:5454/drug-website/api/CheckScurityCode/${code}`
      );
      setData(response.data[0]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("🚀 ~ Page ~ code:", code);
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className={`container px-4 z-10 relative m-auto`}>
        <div className="text-center font-semibold text-4xl py-4 uppercase">
          Security Check
        </div>

        <div className="py-[20px] md:py-[40px]">
          <div className=" opacity-80 rounded-xl">
            <div className="p-10 text-center">
              <p className="text-2xl font-medium mb-6">
                Verify Medicine Security Code
              </p>
              <div className="flex flex-col items-center justify-center gap-4 mx-auto mb-12 md:flex-row">
                <input
                  className="h-12 w-[40%] min-w-[260px] text-black p-2 border-2 border-primary rounded-md"
                  onChange={(e) => setCode(e.target.value)}
                />
                <ButtonPrimary onClick={handleVerifyClick}>
                  VERIFY
                </ButtonPrimary>
              </div>
              {/* <p className="text-lg font-medium">Security Check Information</p> */}
              <div className="font-medium text-lg">
                {isLoading ? (
                  <p className="text-center font-bold animate-pulse">Loading</p>
                ) : (
                  <div className="mx-auto">
                    <p
                      className="text-center font-bold break-all"
                      dangerouslySetInnerHTML={{ __html: data?.message }}
                    />
                    <p
                      className="text-center break-all"
                      dangerouslySetInnerHTML={{ __html: data?.message1 }}
                    />
                    <p
                      className="text-center"
                      dangerouslySetInnerHTML={{ __html: data?.message2 }}
                    />
                    <p
                      className="text-center"
                      dangerouslySetInnerHTML={{ __html: data?.message3 }}
                    />
                    {data?.status && (
                      <Image
                        src={"/assets/images/security/qr_code.jpg"}
                        height={200}
                        width={200}
                        alt="qr_code"
                        className="h-[200px] w-[200px] mx-auto"
                      />
                    )}
                    {data?.securityCodeDetails && (
                      <div className="text-left py-8">
                        <span className="font-bold"> Medicine Name : </span>
                        <span
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: data?.securityCodeDetails.MEDICINE_NAME,
                          }}
                        />

                        <Image
                          src={`https://www.drug-international.com/${data?.securityCodeDetails?.MEDICINE_IMG}`}
                          height={200}
                          width={200}
                          alt="medicine"
                          className="max-h-[200px] w-auto my-8"
                        />

                        <p
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: data?.securityCodeDetails?.MEDICINE_DESC,
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
