import React, { useEffect, useRef, useState } from "react";
import { Radio, Button } from "@material-tailwind/react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const gridIframe = useRef(null);
  const [urlState, setUrlState] = useState("http://localhost:3000/sample");
  const [sampleIdState, setSampleIdState] = useState("");

  useEffect(() => {

  }, []);

  const setUrl = (e: any) => {
    setUrlState(e.target.value);
  }

  function handleIframe() {
    try {
      const iframeItem = gridIframe?.current;
      const anchors = iframeItem?.contentWindow?.document?.getElementsByTagName("a");
    } catch (error) {
      alert("Url can not be load in iframe");
    }
  }

  function getSampleID() {
    try {
      const iframeItem = gridIframe?.current;
      const data = iframeItem?.contentWindow?.document?.getElementById("sample_id");
      setSampleIdState(data?.textContent);
    } catch (error) {
      console.log("getSampleID Error:", error);
    }
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center  p-24">
        <div className="flex gap-10">
          <Radio defaultChecked onChange={setUrl} name="url" value={"http://localhost:3000/sample"} label="http://localhost:3000/sample" />
        </div>

        <div className="flex gap-10">
          <Radio onChange={setUrl} name="url" value={"https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html"} label="https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html" />
        </div>

        <Button
          onClick={() => setShowModal(true)}
        >
          Show modal
        </Button>

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => { setShowModal(false); setSampleIdState(""); }}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <iframe
                      title="Grid Generator"
                      ref={gridIframe}
                      src={urlState}
                      width="700px"
                      height="400px"
                      frameBorder={0}
                      onLoad={handleIframe}
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    Sample ID: {sampleIdState}
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => { setShowModal(false); setSampleIdState(""); }}
                    >
                      Close
                    </button>
                    <Button
                      onClick={getSampleID}
                    >
                      Get Sample ID
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </main>
    </>
  );
}