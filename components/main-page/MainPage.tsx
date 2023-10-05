import { ContactUs } from './ContactUs';
import { Contribution } from './Contribution';
import { ImmersiveExperience } from './ImmersiveExperience';
import { SampleSection } from './SampleSection';

export const MainPage: React.FC = () => {
  return (
    <div>
      <ImmersiveExperience />
      <SampleSection />
      <Contribution />
      <ContactUs />
    </div>
  );
};
