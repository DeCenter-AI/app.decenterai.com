'use client'
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {useUserContext} from '../userContext';
import {get_user} from '@/lib/prismaUtils';
import {generateFromEmail} from 'unique-username-generator';
import {AvatarGenerator} from 'random-avatar-generator';
import {GiDigitalTrace} from 'react-icons/gi';
import particle from '@/lib/particle';
import Loading from '../components/Loading';
import {userType} from "@app/api/prisma/upsert_user/route";
import axios from "axios";

export async function upsert_user(user: userType) {
  const res = await axios.put('/api/prisma/add_user', user);
  console.debug({ upsert_user: res });
  return res;
}

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const generator = new AvatarGenerator();

  const login = async () => {
    const userInfo = await particle.auth.login({
      supportAuthTypes: 'email,google',
    });
    console.log({primsa:userInfo});
    const email = userInfo.email || userInfo.google_email;
    const name = userInfo.name || (userInfo.thirdparty_user_info ? userInfo.thirdparty_user_info.user_info.name : '');
    const profileImage = userInfo.avatar || (userInfo.thirdparty_user_info ? userInfo.thirdparty_user_info.user_info.picture : '');

    if (!userInfo) {
      console.error({ particle: "user not logged in" });
      return;
    }

    setIsLoading(true);

    const user_data: userType = {
      email,
      userName: generateFromEmail(email, 2),
      name,
      profileImage: generator.generateRandomAvatar(profileImage),
    };

    const res = await upsert_user(user_data);
    setUser(user_data);
    push('/dashboard');
  };

  useEffect(() => {
    console.log('checkStatus:prisma');
    const checkStatus = async () => {
      console.log('ok');
      const info = particle.auth.getUserInfo();
      console.log(info);
      if (!info) return;
      const email = info.email || info.google_email;

      const res = await get_user(email);
      if (res.data.user) {
        const user_data = {
          email: res.data.user.email,
          userName: res.data.user.userName,
          name: res.data.user.name,
          profileImage: res.data.user.profileImage,
        };
        setUser(user_data);
        console.log(user_data);
        setIsLoading(true);
        push('/dashboard');
      }
    };
    checkStatus();
  }, []);

  return (
      <div className="bg-primary_13 h-screen flex flex-col gap-4 relative">
        {isLoading && <Loading />}
        <div className="h-[10%] flex pl-10">
          <div className="w-[20%] lg:w-[10%] relative">
            <Image
                src="/logo.png"
                alt="logo image"
                fill={true}
                style={{
                  objectFit: 'contain',
                }}
            />
          </div>
        </div>
        <div className="h-[90%] w-full flex justify-center items-center">
          <div className="w-[80%] lg:w-[30%] h-[80%]">
            <div className="h-[10%]">
              <h1 className="font-logirentBold text-primary_1 text-center font-bold text-4xl">
                {' '}
                Explore
              </h1>
            </div>
            <div className="h-[90%]">
            {/* <form
              className="h-[30%] flex flex-col gap-4 text-primary_1"
              onSubmit={loginPassswordLess}
            >
              <div className="h-[50%] flex flex-col">
                <div className="h-[30%] ">
                  <p className="font-archivo text-primary_1 text-xs">Email address</p>
                </div>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="block h-[90%] focus:outline-none focus:ring-1 ring-primary_7 focus:border-none border border-primary_11 rounded-xl px-6 bg-transparent text-sm font-archivo"
                  required
                  onChange={handleEmailChange}
                />
              </div>
              <div className="h-[50%] w-full">
                <button
                  className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-xs py-3 w-full cursor-pointer rounded-xl"
                  type="submit"
                >
                  Start Exploring
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center h-[10%] relative">
              <div className="text-primary_8 text-md absolute top-0 h-full  flex items-center justify-center bg-primary_13 px-4">
                or
              </div>
              <div className="border border-primary_11 w-full"></div>
            </div> */}
              <div className="h-[60%] flex flex-col gap-3 pt-10">
                <button
                    className="border flex items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo text-sm w-full h-12 cursor-pointer rounded-xl"
                    onClick={login}
                >
                  <GiDigitalTrace size={20} className="text-primary_7" />
                  Start here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
