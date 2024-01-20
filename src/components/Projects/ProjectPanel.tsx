import FrontendProjects from './FrontendProjects';
import FigmaProjects from './FigmaProjects';

const TabPanel: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <div >
      {activeTab === 'frontend' && <FrontendProjects />}
      {activeTab === 'figma' && <FigmaProjects />}
    </div>
  );
};

export default TabPanel;
