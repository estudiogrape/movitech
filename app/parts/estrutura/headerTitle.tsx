interface PropsHeaderTitle {
  title: string;
  text: string;
  backgroundClass?: string | null;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
  const classBg = props.backgroundClass ? props.backgroundClass : "";
  const classText = props.text ? props.text : "";
  return (
    <div
      className={` ${classBg} bg-cover h-18 md:h-42 xl:h-48 2xl:h-64 flex items-center justify-center p-4 md:p-8 lg:p-10 `}
    >
      <div className="container mx-auto px-4 text-white text-center">
        <div
          className={` ${classText} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold`}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
}
