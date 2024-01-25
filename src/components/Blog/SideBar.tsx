// SideBar.tsx
import React, { useContext } from "react";
import styles from "./SideBar.module.scss";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { ThemeContext } from "../../hooks/ThemeContext";

interface SideBarProps {
  onCategoryClick?: (category: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onCategoryClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.sidebar} ${styles[theme]}`}>
      <ul className={`${styles.uList}`}>
        <MDBAccordion borderless initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="All categories"
            className={`${styles.accordionItem} ${styles[theme]}`}
          >
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("programming") : null
              }
            >
              HTML
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("data structure") : null
              }
            >
              CSS
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("objects") : null
              }
            >
              JavaScript
            </li>
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="Frontend Development"
            className={`${styles.accordionItem} ${styles[theme]}`}
          >
            <li
              onClick={() => (onCategoryClick ? onCategoryClick("html") : null)}
            >
              HTML
            </li>
            <li
              onClick={() => (onCategoryClick ? onCategoryClick("css") : null)}
            >
              CSS
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("javascript") : null
              }
            >
              JavaScript
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("react") : null
              }
            >
              React
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("redux") : null
              }
            >
              Redux
            </li>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={3}
            headerTitle="Data Structures and Algorithms"
            className={`${styles.accordionItem} ${styles[theme]}`}
          >
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("data structure") : null
              }
            >
              General
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("linked list") : null
              }
            >
              Linked List
            </li>
            <li
              onClick={() => (onCategoryClick ? onCategoryClick("tree") : null)}
            >
              Tree
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("sorting") : null
              }
            >
              Sorting Algorithms
            </li>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={4}
            headerTitle="Methods"
            className={`${styles.accordionItem} ${styles[theme]}`}
          >
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("methods") : null
              }
            >
              General Methods
            </li>
            <li
              onClick={() =>
                onCategoryClick ? onCategoryClick("best practices") : null
              }
            >
              Best Practices
            </li>
          </MDBAccordionItem>
        </MDBAccordion>
      </ul>
    </div>
  );
};

export default SideBar;
