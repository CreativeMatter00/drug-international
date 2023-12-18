interface CapsuleButtonProps {
  buttonName: string;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ buttonName }) => {
  return (
    <button className="flex group rounded-full text-center justify-center items-center relative z-30">
      <div className="bg-[#F00]  rounded-l-full shadow-xl z-30 w-[7vh] h-[5vh]"></div>
      {/* <div className="bg-[#FF0000]  rounded-l-full shadow-xl z-30 w-[7vh] h-[5vh]"></div> */}
      <div className="bg-[#D3D3D3] group-hover:translate-x-[8.5vh] duration-500 ease-in-out rounded-r-full shadow-xl z-10 w-[7vh] h-[5vh]"></div>

      <div className={`left-0 absolute text-[3vh] overflow-hidden`}>
        <div className={`rounded-2xl ml-[7.5vh]`}>
          <div className="w-0 group-hover:w-[10vh] text-left duration-500 opacity-0 group-hover:opacity-100 ease-in-out scale-75 group-hover:scale-100">
            <p className="-ml-[5vh] group-hover:ml-0 duration-500 text-[#808080]">
              {buttonName}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CapsuleButton;

// interface CapsuleButtonProps {
//   buttonName: string;
// }

// const CapsuleButton: React.FC<CapsuleButtonProps> = ({ buttonName }) => {
//   return (
//     <button className="flex group rounded-full text-center justify-center items-center relative z-30">
//       <div className="bg-[#FF0000]  rounded-l-full shadow-xl z-30 w-[7vh] h-[5vh]"></div>
//       <div className="bg-[#D3D3D3] group-hover:translate-x-[8.5vh] duration-500 ease-in-out rounded-r-full shadow-xl z-10 w-[7vh] h-[5vh]"></div>

//       <div className={`left-0 absolute text-[3vh] overflow-hidden`}>
//         <div className={`rounded-2xl ml-[7.5vh]`}>
//           <div className="w-0 group-hover:w-[10vh] text-left duration-500 opacity-0 group-hover:opacity-100 ease-in-out scale-75 group-hover:scale-100">
//             <p className="-ml-[5vh] group-hover:ml-0 duration-500 text-[#808080]">
//               {buttonName}
//             </p>
//           </div>
//         </div>
//       </div>
//     </button>
//   );
// };

// export default CapsuleButton;
