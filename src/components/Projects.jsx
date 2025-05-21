import { projectsData } from "../constants/projectsPortfolio";

export default function Projects() {

  return (
    <div className="py-20 md:py-28 animate-fade-down animate-duration-[1500ms] animate-delay-400">
      <div className="mx-auto max-w-6xl gap-20 px-6 sm:px-12 lg:px-16 font-mono">
        <div className="text-center xl:col-span-2 mb-12">
          <h2 className="text-4xl font-semibold tracking-tight text-green-900 dark:text-gray-100 sm:text-5xl">
            Main projects
          </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            Below is a list of my completed works and collaborations for websites, including a mobile app developed over the past few years as a software developer using different technologies, since HTML and JavaScript vanilla to React, Vue js or Flutter for mobile development.        
            </p>
        </div>


        <ul role="list" className="space-y-8 xl:col-span-3 animate-fade-down animate-duration-[1500ms] animate-delay-500">
          {  projectsData.map(
            ({ company, role, imageUrl, description, url, repo }, index) => (
              <li
                key={index}
                className="flex flex-col gap-4 lg:gap-10 lg:flex-row p-3 bg-transparent
                           rounded-3xl ring-1 ring-slate-300 dark:ring-[#471f8d] hover:shadow-md hover:bg-white/30 dark:hover:bg-white/10 hover:backdrop-blur-md" >
              {/* <iframe src={url} className="aspect-square w-[24rem] md:w-96 xl:w-[40rem] h-80 flex-none rounded-none md:rounded-2xl object-cover"></iframe> */}
                  <img
                    alt={company}
                    src={imageUrl}
                    className="w-96 xl:w-[36rem] rounded-lg md:rounded-2xl"
                  />

                <div className="max-w-xl flex-auto pt-2 lg:pt-6 text-justify">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold tracking-tight text-green-900 dark:text-blue-300">
                      {company}
                    </h3>
                    <p className="text-base/7 font-semibold text-gray-600 dark:text-gray-200">
                      {role}
                    </p>
                    <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-200">
                      {description}
                    </p>
                  </a>
                  <a
                    href={repo}
                    className="text-green-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    <span className="sr-only">Repository</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 30 30"
                      aria-hidden="true"
                      className="mt-4 size-10"
                    >
                      <path
                        d="M14.831,17c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414l2.583-2.583c.188-.189,.293-.44,.293-.708s-.104-.518-.293-.707l-2.583-2.584c-.391-.391-.391-1.024,0-1.414,.391-.391,1.023-.391,1.414,0l2.583,2.583c.566,.566,.879,1.32,.879,2.121s-.312,1.555-.879,2.122l-2.583,2.583c-.195,.195-.451,.293-.707,.293Zm-4.955-.298c.391-.391,.391-1.023,0-1.414l-2.583-2.583c-.189-.189-.293-.44-.293-.708s.104-.518,.293-.707l2.583-2.583c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.583,2.583c-.567,.567-.879,1.32-.879,2.122s.312,1.555,.879,2.122l2.583,2.583c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293Zm14.124,2.298V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
