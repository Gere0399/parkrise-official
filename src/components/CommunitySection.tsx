const CommunitySection = () => {
  return (
    <div className="bg-[#F9F9F9] py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-8">Join Our Community</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
            Connect with like-minded individuals and be part of a growing community of space enthusiasts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-600">
                Meet and network with other space owners and renters in your area.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Share</h3>
              <p className="text-gray-600">
                Share your experiences and learn from others in the community.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Grow</h3>
              <p className="text-gray-600">
                Grow your network and discover new opportunities together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;