<div className="bg-[#001E2B]">
          <nav className="flex justify-between bg-[#001E2B]">
            <div className="flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]">
              <Icon icon="mdi:github" width="20px" color="#6CF4B5" />
              <h1 className="text-[15px] text-[#008FE5]">
                <a
                  href="https://github.com/alexandroivaldez/devlog"
                  target="_blank"
                >
                  alexandroivaldez / devlog
                </a>
              </h1>
            </div>
          </nav>

          {/* <p className="text-white">{responseMessage}</p> */}
          <div className="w-[100%] h-[100%] bg-[#001E2B]">
            <div className="flex flex-col w-[75%] ml-auto mr-auto mt-[50px] justify-center">
              <div className="flex flex-col w-[220px]">
                <h1 className="text-[50px] text-[#E5EAE8]">Devlog</h1>
                <div className="flex justify-between">
                  <p className="text-[#B9C0BF]">{currentDate.toDateString()}</p>
                  {/* <p className='text-[#B9C0BF]'>&#x2022;</p>
              <p className='text-[#B9C0BF]'>{entries} stories</p> */}
                </div>
              </div>
              <BasicForm />
              <EntryContainer data={responseMessage} />
            </div>
          </div>
        </div>