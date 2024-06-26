import React, { PropsWithChildren } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import ItemList, { ListItem } from "../indpro/ItemList";
import ShieldCheck from "../../assets/icons/ShieldCheck";
import MapPin from "../../assets/icons/MapPin";
import LiveExpert from "../../assets/icons/LiveExpert";
import { Section, StationaryBookNow } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";
import { StateIcon } from "../../assets/icons/primary/StateIcon";
import { PageSection } from "./constants";

const Skills: React.FC = () => {
  return (
    <Section
      id={PageSection.Skills}
      gapMobile={"40"}
      gapStationary={"40"}
      pyStationary={"64"}
      pxMobile={"16"}
      pxSmall={"16"}
      pxMedium={"40"}
      pxLarge={"120"}
      pxStationary={"156"}
      aria-label={"Expertise and Experience"}
    >
      <Tagline />
      <div className={"flex flex-wrap gap-10 s:grid grid-cols-2 s:gap-16"}>
        <Expertise />
        <Experience />
      </div>
      <StationaryBookNow section={PageSection.Skills} />
    </Section>
  );
};

const Tagline: React.FC = () => {
  const pro = useIndependentPro();

  return (
    <ResponsiveTypography
      typescaleMobile={TypeScale.Headline03}
      typescaleStationary={TypeScale.Headline02}
      weightMobile={"regular"}
      weightStationary={"regular"}
      color={TextColor.textPrimary}
      as={"h2"}
    >
      {pro.c_tagline}
    </ResponsiveTypography>
  );
};

const Expertise: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <div className={"max-w-[500px]"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline03}
        typescaleStationary={TypeScale.Headline04}
        weightMobile={"regular"}
        weightStationary={"regular"}
        as={"h3"}
        className={"pb-6"}
      >
        Expertise
      </ResponsiveTypography>
      <PillBox>
        {pro.c_areasOfExpertise?.map((skill) => (
          <SkillPill key={skill} children={skill} />
        ))}
      </PillBox>
    </div>
  );
};

const PillBox: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={"flex gap-3 flex-wrap"}>{children}</div>;
};

const SkillPill: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={"rounded-large px-2 py-1 bg-tofu100"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Body03}
        typescaleStationary={TypeScale.Body02}
        weightMobile={"medium"}
        weightStationary={"demi"}
        color={TextColor.textPrimary}
        as={"div"}
      >
        {children}
      </ResponsiveTypography>
    </div>
  );
};

const Experience = () => {
  const pro = useIndependentPro();
  const items: ListItem[] = [];
  const yearsOfExperienceText = pro.yearsOfExperience > 0 ? `with ${pro.yearsOfExperience} ${
      pro.yearsOfExperience === 1 ? "year" : "years"
  } of experience` : 'just starting out';

  items.push({
    icon: <ShieldCheck className={"w-6 h-6 s:w-8 s:h-8"} />,
    children: `Verified Pro ${yearsOfExperienceText}`,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  items.push({
    icon: <MapPin className={"w-6 h-6 s:w-8 s:h-8"} />,
    children: `Experienced with ${pro.address.region} tax code`,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  if (pro.c_allowsMeetInPerson || pro.c_allowsMeetVirtually) {
    items.push({
      icon: <LiveExpert className={"w-6 h-6 s:w-8 s:h-8"} />,
      children:
        pro.c_allowsMeetInPerson && pro.c_allowsMeetVirtually
          ? `Meet online or in person`
          : pro.c_allowsMeetVirtually
          ? "Meet online"
          : "Meet in person",
      typescaleMobile: TypeScale.Body02,
      weightMobile: "regular",
      typescaleStationary: TypeScale.Body01,
      weightStationary: "regular",
    });
  }

  items.push({
    icon: <StateIcon state={pro.address.region} />,
    children: `${pro.address.city}, ${pro.address.region}`,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  return (
    <div className={"max-w-[500px]"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline03}
        typescaleStationary={TypeScale.Headline04}
        weightMobile={"regular"}
        weightStationary={"regular"}
        as={"h3"}
        className={"pb-6"}
      >
        Experience
      </ResponsiveTypography>
      <ItemList items={items} />
    </div>
  );
};

export default Skills;
