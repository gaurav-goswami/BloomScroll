import { FloatingDock } from "@/components/ui/floating-dock";
import { IconFlower, IconHome, IconPointer } from "@tabler/icons-react";

const NavigationDock = () => {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Join",
            icon: (
                <IconPointer className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "About",
            icon: (
                <IconFlower className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    return (
        <div className="flex items-center justify-center w-full bottom-10 absolute">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    )
};

export default NavigationDock;