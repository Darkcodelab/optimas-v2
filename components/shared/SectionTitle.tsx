type Props = {
  title: string;
  subTitle?: string;
};

export default function SectionTitle({ title, subTitle = "" }: Props) {
  return (
    <div className="text-center lg:text-left">
      {subTitle && <p className="uppercase text-xs font-light 0">{subTitle}</p>}
      <h2 className="text-3xl mt-4 mb-3 font-bold lg:text-4xl">{title}</h2>
      <div className="w-[93px] h-[9px] bg-secondary-yellow mx-auto lg:ml-0"></div>
    </div>
  );
}
