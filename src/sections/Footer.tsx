import { NAME } from "../constants";
import { Link } from "../components/Link";
import { LogoIcon } from "../components/LogoIcon";

export const Footer = () => {
  return (
    <footer className="text-gray-500 dark:text-gray-300  bg-gray-300 dark:bg-gray-900">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col space-y-1 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <LogoIcon className="w-6 h-6" />
          <p className="text-sm">
            © {new Date().getFullYear()} {NAME} —
            <a
              href="https://github.com/jsmith"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              @jsmith
            </a>
          </p>
        </div>

        <div className="flex-grow" />
        <span className="flex items-center space-x-2">
          <a
            className="text-xs text-center"
            href="https://github.com/jsmith/TODO"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <Link
            className="text-xs text-center"
            route="release-notes"
            label="Release Notes"
          />
          <span>•</span>
          <Link
            className="text-xs text-center"
            route="privacy"
            label="Privacy"
          />
          <span>•</span>
          <Link className="text-xs text-center" route="terms" label="Terms" />
          <span>•</span>
          <a href="mailto:test@example.com" className="text-xs text-center">
            Contact
          </a>
        </span>
      </div>
    </footer>
  );
};
