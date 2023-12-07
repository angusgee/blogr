import "./App.css";

function App() {
  return (
    <div className="bg-neutral-50 flex flex-col">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[600px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c60567e868393f9635a7d98743231df0b9a832077be5be7d373a09ff9b1ffd?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full max-w-[1112px] flex-col mt-2.5 mb-20 max-md:max-w-full max-md:mb-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc52a3b360bd100837580984dc2d05ee0185a6f2b81496e145d0f4ede619784?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
              className="aspect-[2.59] object-contain object-center w-[101px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="self-center flex justify-between gap-2.5 my-auto items-start max-md:justify-center">
              <div className="text-white text-base font-bold whitespace-nowrap">
                Product
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1dac6199da461cf3187f1a106576cf734518d3c8cc2b45ada3ba055be0ffea?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[1.67] object-contain object-center w-2.5 stroke-[2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-base font-bold">Company</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1dac6199da461cf3187f1a106576cf734518d3c8cc2b45ada3ba055be0ffea?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[1.67] object-contain object-center w-2.5 stroke-[2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-base font-bold">Connect</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1dac6199da461cf3187f1a106576cf734518d3c8cc2b45ada3ba055be0ffea?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[1.67] object-contain object-center w-2.5 stroke-[2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="text-white text-right text-base font-bold grow whitespace-nowrap my-auto">
                Login
              </div>
              <div className="text-rose-500 text-right text-base font-bold whitespace-nowrap bg-white self-stretch grow justify-center items-stretch pl-11 pr-10 py-4 rounded-3xl max-md:px-5">
                Sign Up
              </div>
            </div>
          </div>
          <div className="text-white text-center text-6xl font-semibold tracking-tighter self-center max-w-[920px] mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            A modern publishing platform
          </div>
          <div className="text-white text-center text-xl font-light self-center whitespace-nowrap mt-7">
            Grow your audience and build your online brand
          </div>
          <div className="self-center flex items-stretch gap-4 mt-14 max-md:mt-10">
            <div className="text-rose-500 text-right text-base font-bold whitespace-nowrap bg-white grow justify-center items-stretch p-5 rounded-3xl">
              Start for Free
            </div>
            <div className="text-white text-right text-base font-bold whitespace-nowrap border grow justify-center items-stretch px-7 py-5 rounded-3xl border-solid border-white max-md:px-5">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1275px] flex-col items-stretch mt-40 px-5 max-md:max-w-full max-md:mt-10">
        <div className="text-cyan-900 text-center text-4xl font-semibold tracking-tighter self-center whitespace-nowrap">
          Designed for the future
        </div>
        <div className="mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="text-cyan-900 text-3xl font-semibold leading-7 max-md:max-w-full">
                  Introducing an extensible editor
                </div>
                <div className="text-gray-600 text-base font-light leading-7 tracking-wide mt-9 max-md:max-w-full">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </div>
                <div className="text-cyan-900 text-3xl font-semibold leading-7 mt-20 max-md:max-w-full max-md:mt-10">
                  Robust content management
                </div>
                <div className="text-gray-600 text-base font-light leading-7 tracking-wide mt-9 max-md:max-w-full">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b790f380e86f34ddc3eff5fc5286f017fa33c4893283f1c7c8b372d752caad16?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[1.43] object-contain object-center w-full overflow-hidden grow mt-1.5 max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1085px] mt-56 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53ce63fe6e1ad92264ef4e68f6d00aa9c23b8e09e2b0e41f95acb6eb1c57c5c8?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-white text-4xl font-semibold tracking-tighter whitespace-nowrap max-md:max-w-full">
                  State of the Art Infrastructure
                </div>
                <div className="text-white text-base font-light leading-7 tracking-wide mt-9 max-md:max-w-full">
                  With reliability and speed in mind, worldwide data centers
                  provide the backbone for ultra-fast connectivity. This ensures
                  your site will load instantly, no matter where your readers
                  are, keeping your site competitive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="border flex grow flex-col justify-center items-stretch w-full pr-14 py-12 rounded-[510px] border-solid border-slate-800 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="border flex flex-col justify-center items-stretch my-2.5 pr-14 py-12 rounded-[510px] border-solid border-slate-800 max-md:max-w-full max-md:pr-5">
                <div className="bg-slate-800 flex flex-col justify-center my-2 py-12 rounded-[393.383px] items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db237cdcca8a721e4110a3d6e84c0e9780804def8304946a26ab7e9508a70951?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                    className="aspect-[1.51] object-contain object-center w-full overflow-hidden mt-6 mb-6 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-cyan-900 text-3xl font-semibold leading-7 max-md:max-w-full">
                Free, open, simple
              </div>
              <div className="text-gray-600 text-base font-light leading-7 tracking-wide mt-9 max-md:max-w-full">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </div>
              <div className="text-cyan-900 text-3xl font-semibold leading-7 mt-20 max-md:max-w-full max-md:mt-10">
                Powerful tooling
              </div>
              <div className="text-gray-600 text-base font-light leading-7 tracking-wide mt-9 max-md:max-w-full">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 self-stretch flex w-full flex-col justify-center mt-32 px-16 py-12 rounded-none items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-[930px] max-w-full ml-28 mt-5 mb-7">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc52a3b360bd100837580984dc2d05ee0185a6f2b81496e145d0f4ede619784?apiKey=93fbe5c0e43741beafdc3454cb213e73&"
                className="aspect-[2.53] object-contain object-center w-[101px] overflow-hidden shrink-0 max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-2.5 max-md:mt-10">
                <div className="text-white text-base leading-8 whitespace-nowrap">
                  Product
                </div>
                <div className="text-white text-base leading-8 mt-11 max-md:mt-10">
                  Overview
                  <br />
                  Pricing
                  <br />
                  Marketplace
                  <br />
                  Features
                  <br />
                  Integrations
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:mt-10">
                <div className="text-white text-base leading-8 whitespace-nowrap">
                  Company
                </div>
                <div className="text-white text-base leading-8 mt-10">
                  About
                  <br />
                  Team
                  <br />
                  Blog
                  <br />
                  Careers
                  <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[12%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:mt-10">
                <div className="text-white text-base leading-8 whitespace-nowrap">
                  Connect
                </div>
                <div className="text-white text-base leading-8 mt-11 max-md:mt-10">
                  Contact
                  <br />
                  Newsletter
                  <br />
                  LinkedIn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
