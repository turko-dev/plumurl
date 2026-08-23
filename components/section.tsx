
type Props = {
  children?: React.ReactNode;
}

export default function Section({children}: Props) {
    return (
        <div className="w-full h-fit min-h-114 bg-sky-400 flex-col justify-baseline items-baseline gap-4">
            {children}
        </div>
    )
}