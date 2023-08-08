import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <div className="text-2xl font-bold mb-4">Plays in NCR Delhi</div>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365562-ftdmudsmwh-portrait.jpg"
                  title="Prashasti Singh Live"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358468-abpjuekjzu-portrait.jpg"
                  title="Gaurav Gupta Live - India Tour
                  "
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363071-zseadedfmf-portrait.jpg"
                  title="Trevor Noah: Off The Record Tour"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364993-ycbglrzmsg-portrait.jpg"
                  title="Shubh Still Rollin Tour by Bollyboom-Gurgaon"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA4IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-jyrzfbqyvf-portrait.jpg"
                  title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-kcayfeatqx-portrait.jpg"
                  title="MindFool India Tour - Vir Das"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361024-qpzyuxwzlc-portrait.jpg"
                  title="Mehfil E Sartaaj - Gurgaon"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-cuutwcymuk-portrait.jpg"
                  title="Kisi Ko Batana Mat Ft. Anubhav Singh Bassi"
                  subtitle="Drama | Hindi | 8yrs + | 2hrs 30mins"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
