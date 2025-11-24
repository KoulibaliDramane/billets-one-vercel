import Image from "next/image";
import AnimatedLink from "@/app/components/AnimatedLink";

const Navbar = () => {

    return (
        <nav className="flex justify-between w-full">
            <div className="flex items-center m-2">
                <Image
                    src="/onelogo.svg" // Chemin relatif au dossier /public
                    alt="Logo de l'entreprise"
                    width={100} // Largeur requise pour l'optimisation
                    height={30} // Hauteur requise pour l'optimisation
                    className="h-8 w-auto" // (Optionnel) Classes Tailwind pour styliser
                />
            </div>
            <div>
                <ul className="flex justify-between gap-x-5">
                    <li><AnimatedLink href="./">Acceuil</AnimatedLink></li>
                    <li><AnimatedLink href="./contacts">Contacts</AnimatedLink></li>
                    <li><AnimatedLink href="./a-propos">A propos</AnimatedLink></li>
                </ul>
            </div>
            <div className="flex space-x-4">
                <ul className="flex justify-between gap-x-5">
                    <li><AnimatedLink href="#">Creer un compte</AnimatedLink></li> |
                    <li><AnimatedLink href="#">Se connecter</AnimatedLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;