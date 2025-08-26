// services.ts

export interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

export const services: ServiceCardProps[] = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom websites and web applications built with modern technologies and responsive design.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First']
    },
    {
      icon: '📊',
      title: 'Excel and Google Sheet Templates',
      description: 'Professional Excel templates for business automation, data analysis, and reporting.',
      features: ['Business Templates', 'Financial Models', 'Dashboard Creation', 'Automation Macros', 'Custom Functions']
    },
    {
      icon: '🏷️',
      title: 'Data Annotation',
      description: 'High-quality data labeling and annotation services for machine learning and AI training datasets.',
      features: ['Image Annotation', 'Text Classification', 'Object Detection', 'Video Labeling', 'Audio Transcription']
    },
    {
      icon: '💾',
      title: 'Digital Products',
      description: 'Digital solutions including mobile apps, desktop software, and online tools.',
      features: ['Mobile Apps', 'Desktop Software', 'Web Tools', 'API Development', 'Cloud Solutions']
    },
    {
      icon: '⚙️',
      title: 'Software Services',
      description: 'Custom software development, system integration, and technical consulting.',
      features: ['Custom Development', 'System Integration', 'Database Design', 'API Integration', 'Technical Consulting']
    },
    {
      icon: '🔧',
      title: 'Hardware Solutions',
      description: 'Hardware setup, maintenance, and integration services for businesses.',
      features: ['Hardware Setup', 'Network Configuration', 'System Maintenance', 'Security Systems', 'IoT Solutions']
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your online presence.',
      features: ['Social Media Marketing', 'Content Creation', 'SEO Services', 'Email Marketing', 'Analytics & Reporting']
    }
  ]