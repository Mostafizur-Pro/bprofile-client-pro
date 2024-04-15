import Business from "./business/Business";
import WhatWeDo from "./whatWeDo/WhatWeDo";

const Service = () => {
  // useTitle("Service");
  return (
    <div className="py-10 md:pb-20 xl:pb-28 b_profile_container">
      {/* <Cover title={"Service"} /> */}
      <Business />
      <WhatWeDo />
    </div>
  );
};

export default Service;
