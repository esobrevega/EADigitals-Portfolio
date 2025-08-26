// portfolio.ts

export interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export const categories = ['all', 'web development', 'excel template', 'data annotation', 'software', 'hardware', 'digital product']

export const projects: ProjectCardProps[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Financial Dashboard',
      category: 'Excel Template',
      description: 'Comprehensive financial tracking and reporting template for small businesses.',
      image: '📊',
      tags: ['Excel', 'VBA', 'Charts', 'Automation']
    },
    {
      title: 'Medical Image Dataset',
      category: 'Data Annotation',
      description: 'Annotated 10,000+ medical images for AI diagnostic model training with precise organ segmentation.',
      image: '🏥',
      tags: ['Medical Imaging', 'Segmentation', 'DICOM', 'Quality Control']
    },
    {
      title: 'Inventory Management',
      category: 'Software',
      description: 'Desktop application for warehouse and inventory management with barcode scanning.',
      image: '📦',
      tags: ['Electron', 'SQLite', 'Barcode', 'Reports']
    },
    {
      title: 'Restaurant POS System',
      category: 'Hardware + Software',
      description: 'Complete point of sale system with hardware setup and custom software.',
      image: '🍽️',
      tags: ['POS Hardware', 'Custom Software', 'Payment Integration']
    },
    {
      title: 'Chatbot Training Data',
      category: 'Data Annotation',
      description: 'Classified and labeled 50,000+ customer service conversations for chatbot training.',
      image: '🤖',
      tags: ['NLP', 'Intent Classification', 'Entity Extraction', 'Sentiment Analysis']
    },
    {
      title: 'Marketing Analytics Tool',
      category: 'Digital Product',
      description: 'Web-based analytics tool for tracking marketing campaigns and ROI.',
      image: '📈',
      tags: ['Analytics', 'API Integration', 'Dashboard', 'Reports']
    },
    {
      title: 'CRM Template Suite',
      category: 'Excel Template',
      description: 'Complete customer relationship management templates for sales tracking.',
      image: '👥',
      tags: ['CRM', 'Sales Tracking', 'Customer Data', 'Reports']
    },
    {
      title: 'Autonomous Vehicle Dataset',
      category: 'Data Annotation',
      description: 'Labeled traffic signs, pedestrians, and vehicles in 25,000+ driving scenario images.',
      image: '🚗',
      tags: ['Computer Vision', 'Object Detection', 'Bounding Boxes', 'Traffic Analysis']
    }
  ]