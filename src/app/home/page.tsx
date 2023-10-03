// // "use client";
// // import BlogCard from "@/components/BlogCard";
// // import { AiFillPushpin } from "react-icons/ai";
// // import { User, category } from "@/data";
// // import gj from "../../public/gj.png";

// // import Navbar from "@/components/Navbar";
// // import FeaturedPost from "@/components/FeaturedPost";
// // import { useEffect, useRef } from "react";
// // import { motion, useInView } from "framer-motion";
// // import Link from "next/link";
// // import { Category } from "@/types";

// // export default function Home() {
// //   const ref = useRef(null);

// //   const inView = useInView(ref);

// //   useEffect(() => {
// //     console.log("inview -->", inView);
// //   }, [inView]);
// //   return (
// //     <div className="">
// //       {/* home container */}
// //       <div className="w-screen  p-0 m-0 ">
// //         {/* navbar */}
// //         <div className="w-full h-[77px] bg-white border-[1px] border-gray-600/30 flex flex-row items-center justify-between px-[56px] ">
// //           <div className="w-[10%] h-full text-teal-950 flex justify-center items-center text-3xl font-burton font-[800]">
// //             Postpal
// //           </div>

// //           <div className="md:w-[40%] h-full flex flex-row items-center justify-end gap-4 text-[16px] font-[500]">
// //             <div className="hidden md:block">Compose</div>
// //             <div className="hidden md:block "></div>

// //             <div className="px-[5px] py-[3px] rounded-md bg-teal-950 text-white">
// //               <Link href={"/signup"}> Get started</Link>
// //             </div>
// //           </div>
// //         </div>
// //         {/* hero section */}
// //         <div className="mt-[77px]"></div>
// //         {/* featured post  */}
// //         <div className="md:px-[56px] mt-[32px] flex flex-row items-center w-full gap-4 text-xl mb-4">
// //           <AiFillPushpin /> <div className="text-xl">Featured</div>
// //         </div>
// //         <motion.div
// //           ref={ref}
// //           className=" mt-[32px] w-full flex flex-row justify-center md:px-[56px] gap-4"
// //         >
// //           <div className="w-full ">
// //             <FeaturedPost />
// //           </div>
// //         </motion.div>

// //         {/* post */}
// //         <div className="w-full flex flex-row justify-between md:px-[56px] mb-[40px] mt-[77px] gap-6 ">
// //           <div className="md:w-[50%] w-full">
// //             <PostList />
// //           </div>
// //         </div>
// //         <div className="h-[300vh]"></div>
// //       </div>
// //     </div>
// //   );
// // }

// // const CategoryListSm = () => {
// //   return (
// //     <div className="block px-[16px] md:hidden w-full relative mt-[48px] mb-[36px]">
// //       {/* category */}
// //       <div className={`w-full `}>
// //         <div className="text-xl font-[500] mb-[16px]">
// //           Discover more of what matters to you
// //         </div>
// //         <div className="">
// //           <div
// //             className={`w-full flex flex-row justify-start flex-wrap gap-4 `}
// //           >
// //             {category &&
// //               category.map((v, i) => (
// //                 <div className="font-[500] " key={i}>
// //                   <p
// //                     key={i}
// //                     className={` font-[500] text-black/50 hover:cursor-pointer `}
// //                   >
// //                     {v.category}
// //                   </p>
// //                 </div>
// //               ))}
// //             {}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const CategoryListMd = ({
// //   inView,
// //   category,
// // }: {
// //   inView: boolean;
// //   category: Category[];
// // }) => {
// //   return (
// //     <div className="hidden md:block w-[40%] relative">
// //       {/* category */}
// //       <div className={`w-full ${inView ? "" : "fixed top-[77px] w-auto"} `}>
// //         <div className="text-xl font-[500] mb-[32px]">
// //           Discover more of what matters to you
// //         </div>
// //         <div className="pl-[32px] ">
// //           <div className={`w-[500px] flex flex-row flex-wrap gap-4  font-500`}>
// //             {category &&
// //               category.map((v, i) => (
// //                 <div
// //                   className=" px-[5px] py-[2px] rounded-md bg-teal-950"
// //                   key={i}
// //                 >
// //                   <p
// //                     key={i}
// //                     className={` font-[500] text-white hover:cursor-pointer `}
// //                   >
// //                     {v.category}
// //                   </p>
// //                 </div>
// //               ))}
// //             {}
// //           </div>
// //           <div className="w-auto flex-col text-[14px] text-black/50 font-[400]">
// //             <div className=" mt-6 flex flex-row flex-wrap gap-6">
// //               <div>Help</div>
// //               <div>Status</div>
// //               <div>Writers</div>
// //               <div>Blog</div>
// //               <div>Team</div>
// //             </div>
// //             <div className=" mt-2 flex flex-row flex-wrap gap-6">
// //               <div>Careers</div>
// //               <div>Privacy</div>
// //               <div>Terms</div>
// //               <div>About</div>
// //             </div>
// //             <div className=" mt-4">
// //               <p>
// //                 crafted with{" "}
// //                 <span className=" text-pink-700 text-[16px]">{"\u2665"}</span>{" "}
// //                 by Nauval Yusuf Addairy
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Hero = () => {
// //   return (
// //     <div className="w-screen h-[80vh]  bg-teal-500 flex flex-row px-[56px]">
// //       <div className="-> w-full md:w-[50%] h-full flex flex-row justify-start ">
// //         <div className="mt-[120px]">
// //           <p className="-> md:text-[77px] lg:text-[92px] text-[36px] font-[500] ">
// //             Stay curious.
// //           </p>
// //           <p className="-> md:text-2xl leading-[19.6px] mt-2">
// //             Discover stories, thinking, and expertise from writers on any topic.
// //           </p>
// //           <div className="mt-10">
// //             <button className=" text-xl text-white -> px-[14px] py-[2px] lg:px-[22px] lg:py-[8px] md:px-[16px] md:py-[4px] rounded-md bg-teal-950 font-[500]">
// //               Start Read'in
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="-> md:w-[50%] h-full "></div>
// //     </div>
// //   );
// // };
// // const PostList = () => {
// //   return (
// //     <div className=" w-full flex flex-col gap-4">
// //       {" "}
// //       {User.map((v, i) => (
// //         <BlogCard
// //           date=""
// //           key={i}
// //           organization={v.organization}
// //           userId={v.userId}
// //           userImage={v.userImage}
// //           userPost={v.userPost[0].title}
// //           userName={v.userName}
// //           imgUrl={v.userPost[0].img[0].imgUrl}
// //           showImage={true}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// "use client";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
//   useScroll,
// } from "framer-motion";
// import { useEffect, useRef } from "react";
// import Article from "./Article";
// import Logo from "./Logo";

// let scrollThreshold = [0, 50];

// export default function Homesick() {
//   let { scrollY } = useScroll();
//   let scrollYOnDirectionChange = useRef(scrollY.get());
//   let lastPixelsScrolled = useRef() as any;
//   let lastScrollDirection = useRef() as any;
//   let pixelsScrolled = useMotionValue(0);
//   let height = useTransform(pixelsScrolled, scrollThreshold, [100, 60]);
//   let logoHeight = useTransform(pixelsScrolled, scrollThreshold, [33, 30]);
//   let backgroundOpacity = useTransform(
//     pixelsScrolled,
//     scrollThreshold,
//     [1, 0.4]
//   );
//   let backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;

//   useEffect(() => {
//     return scrollY.on("change", (latest) => {
//       if (latest < 0) return;

//       let isScrollingDown = scrollY.getPrevious() - latest < 0;
//       let scrollDirection = isScrollingDown ? "down" : "up";
//       let currentPixelsScrolled = pixelsScrolled.get();
//       let newPixelsScrolled;

//       if (lastScrollDirection.current !== scrollDirection) {
//         lastPixelsScrolled.current = currentPixelsScrolled;
//         scrollYOnDirectionChange.current = latest;
//       }

//       if (isScrollingDown) {
//         newPixelsScrolled = Math.min(
//           lastPixelsScrolled.current +
//             (latest - scrollYOnDirectionChange.current),
//           scrollThreshold[1]
//         );
//       } else {
//         newPixelsScrolled = Math.max(
//           lastPixelsScrolled.current -
//             (scrollYOnDirectionChange.current - latest),
//           scrollThreshold[0]
//         );
//       }

//       pixelsScrolled.set(newPixelsScrolled);
//       lastScrollDirection.current = scrollDirection;
//     });
//   }, [pixelsScrolled, scrollY]);

//   return (
//     <div>
//       <motion.header
//         style={{ height, backgroundColor: backgroundColorTemplate }}
//         className="fixed inset-x-0 top-0 z-10 flex items-center shadow-sm backdrop-blur ">
//         <div className="flex items-center justify-between w-full max-w-3xl px-4 mx-auto">
//           <a href="/" className="font-semibold leading-none text-stone-900">
//             <Logo style={{ height: logoHeight }} />
//           </a>
//         </div>
//       </motion.header>

//       <main className="max-w-3xl p-4 mx-auto pt-36 text-stone-700 font-serif text-lg space-y-4">
//         <Article />
//       </main>
//     </div>
//   );
// }

export default function Homesick() {
  return (
    <div className="w-screen h-screen">
      {/* Navbar */}
      <div className="w-full h-[77px] z-10 fixed top-0 border-[1px] border-b-gray-500/50 flex flex-row items-center justify-between px-[56px] ">
        <div className="w-[10%] h-full text-teal-950 flex justify-center items-center text-3xl font-burton font-[800]">
          Postpal
        </div>

        <div className="md:w-[40%] h-full flex flex-row items-center justify-end gap-4 text-[16px] font-[500]">
          <div className="hidden md:block">Compose</div>
          <div className="hidden md:block "></div>
        </div>
      </div>
    </div>
  );
}
