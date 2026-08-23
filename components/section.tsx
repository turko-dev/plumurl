
type Props = {
  children?: React.ReactNode;
  direction?: "row" | "col"
}


export default function Section({children, direction="row"}: Props) {
    const flexDirection = {
        "row": "flex-row",
        "col": "flex-col",
  };
    return (
        <div className={`p-4 w-full h-fit min-h-114 flex justify-between items-baseline gap-4 ${flexDirection[direction]}`}>
            {children}
        </div>
    )
}