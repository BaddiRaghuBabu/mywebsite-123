import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
    </div>
  );
}

export default Loading;
