import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled Application Error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '4rem 1.5rem',
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-navy-dark)', marginBottom: '1rem' }}>
            عذراً، حدث خطأ غير متوقع
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
            Something went wrong while loading this section.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.
          </p>
          <button 
            onClick={this.handleReset} 
            className="btn btn-primary"
          >
            العودة للرئيسية / Return Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
