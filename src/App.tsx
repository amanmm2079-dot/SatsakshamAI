import { AssessmentProvider } from '@/context/AssessmentContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ImpactStrip, ProblemSection } from '@/components/ImpactAndProblem';
import LearningJourney from '@/components/LearningJourney';
import CompetencyGap from '@/components/CompetencyGap';
import LearningPath from '@/components/LearningPath';
import IGOTIntegration from '@/components/IGOTIntegration';
import QuizGenerator from '@/components/QuizGenerator';
import LearningAssistant from '@/components/LearningAssistant';
import { LearnerDashboard, AdminAnalytics } from '@/components/Dashboards';
import { ResponsibleAI, ComparisonSection, UsersRoles, ImpactSection } from '@/components/Sections';
import { FinalCTA, Footer } from '@/components/FinalCTA';
import AssessmentModal from '@/components/AssessmentModal';

function App() {
  return (
    <AssessmentProvider>
      <div className="min-h-screen bg-bg">
        <Navbar />
        <main>
          <Hero />
          <ImpactStrip />
          <ProblemSection />
          <LearningJourney />
          <CompetencyGap />
          <LearningPath />
          <IGOTIntegration />
          <QuizGenerator />
          <LearningAssistant />
          <LearnerDashboard />
          <AdminAnalytics />
          <UsersRoles />
          <ResponsibleAI />
          <ComparisonSection />
          <ImpactSection />
          <FinalCTA />
        </main>
        <Footer />
        <AssessmentModal />
      </div>
    </AssessmentProvider>
  );
}

export default App;
