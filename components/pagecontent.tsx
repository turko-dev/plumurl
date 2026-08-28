
type Props = {
  children?: React.ReactNode;
  bg?: 'none' | 'primary' | 'white' | 'secondary'
}


export default function PageContent({bg="none", children}: Props) {

    const bgVariants = {
        "none": "none",
        "primary": "bg-primary",
        "white": "bg-white",
        "secondary": "bg-secondary"
  };

    return(
        <div className={`
            ${bgVariants[bg]}
    
        w-full  md:w-3xl lg:w-5xl xl:w-7xl 
        flex-col justify-baseline items-baseline flex gap-4
        `}>
            {children}
        </div>
    )
}