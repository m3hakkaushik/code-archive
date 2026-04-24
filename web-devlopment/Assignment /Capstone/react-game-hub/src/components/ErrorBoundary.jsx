import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-center text-red-500 text-xl font-bold">Something went wrong in this game. Please return home.</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;