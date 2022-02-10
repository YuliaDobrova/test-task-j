import AnalyticsPage from '../pages/AnalyticsPage';
import ArchivePage from '../pages/ArchivePage';
import GradebooksPage from '../pages/GradebooksPage';
import StudentsPage from '../pages/StudentsPage';
import TeachersPage from '../pages/TeachersPage';
import TestsPage from '../pages/TestsPage';

export const mainRoutes = [
  { name: 'Analytics', path: '/analytics', element: <AnalyticsPage /> },
  { name: 'Archive', path: '/archive', element: <ArchivePage /> },
  { name: 'Gradebooks', path: '/gradebooks', element: <GradebooksPage /> },
  { name: 'Students', path: '/students', element: <StudentsPage /> },
  { name: 'Teachers', path: '/teachers', element: <TeachersPage /> },
  { name: 'Tests', path: '/tests', element: <TestsPage /> },
];
