interface ChipWithIconProps {
    label: string;
    onDelete: () => void;
    iconUrl: string;
}
declare const ChipWithIcon: ({ label, onDelete, iconUrl }: ChipWithIconProps) => JSX.Element;

export { ChipWithIcon, ChipWithIconProps };
