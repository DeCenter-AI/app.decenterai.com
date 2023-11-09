export const myImageLoader = ({ src }) => {
  // Look at the usage in src/app/dashboard/dashLayout.tsx:159
  /* Typical Usage:
      <Image
                    src={user?.profileImage}
                    alt="profile pic"
                    loader={myImageLoader}
                    unoptimized
                    width={40}
                    height={40}
                    className="max-w-[100%] max-h-[100%] rounded-full mr-3"
        />
    */

  return src
}
