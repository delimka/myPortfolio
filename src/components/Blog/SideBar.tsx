// SideBar.tsx
import React, { useContext} from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";
interface SideBarProps {
  onCategoryClick?: (category: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onCategoryClick }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <aside className={`${styles.sidebar} ${styles[theme]}`}>
      <MDBAccordion borderless initialActive={1} className={styles.accordion}>
        <Link to={`/blog?category=${"programming"}`} 
        >
          <MDBAccordionItem
           
            collapseId={1}
            headerTitle={t("sidebar.all")}
            className={`${styles.accordionItem} ${styles[theme]} ${styles.btnCollapsed}`}
          ></MDBAccordionItem>
        </Link>
  
        <MDBAccordionItem
          collapseId={2}
          headerTitle={t("sidebar.fromProjects")}
          className={`${styles.accordionItem} ${styles[theme]}`}
        >
            <Link to={`/blog?category=${"html"}`} 
              >
          <li

          >
            HTML
          </li>
          </Link>
          <li onClick={() => (onCategoryClick ? onCategoryClick("css") : null)}>
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
            onClick={() => (onCategoryClick ? onCategoryClick("react") : null)}
          >
            React
          </li>
          <li
            onClick={() => (onCategoryClick ? onCategoryClick("redux") : null)}
          >
            Redux
          </li>
        </MDBAccordionItem>

        <MDBAccordionItem
          collapseId={3}
          headerTitle={t("sidebar.frontDeveloper")}
          className={`${styles.accordionItem} ${styles[theme]}`}
        >
          <li
            onClick={() => (onCategoryClick ? onCategoryClick("html") : null)}
          >
            HTML
          </li>
          <li onClick={() => (onCategoryClick ? onCategoryClick("css") : null)}>
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
            onClick={() => (onCategoryClick ? onCategoryClick("react") : null)}
          >
            React
          </li>
          <li
            onClick={() => (onCategoryClick ? onCategoryClick("redux") : null)}
          >
            Redux
          </li>
        </MDBAccordionItem>

        <MDBAccordionItem
          collapseId={4}
          headerTitle={t("sidebar.dataStructuresAlgorithms")}
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
          collapseId={5}
          headerTitle={t("sidebar.methods")}
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
    </aside>
  );
};

export default SideBar;
