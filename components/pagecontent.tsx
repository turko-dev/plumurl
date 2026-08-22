
type Props = {
  children?: React.ReactNode;
}
export default function PageContent({children}: Props) {
    return(
        <div className="

        w-full  md:w-3xl lg:w-5xl xl:w-7xl 
        flex-col justify-baseline items-baseline flex gap-4
        ">
            {children}
        </div>
    )
}