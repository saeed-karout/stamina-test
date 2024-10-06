function Spaces() {
    return (
        <div className="h-auto min-h-screen w-full mx-auto pt-36 pb-24">
        <p className="text-3xl font-semibold text-center text-primary mb-12">
          Spaces
        </p>
  
         <div className="flex flex-wrap justify-center  gap-x-24 gap-y-8">
          {/* Space 1 */}
          <div className="space-item w-full sm:w-[45%] lg:w-[30%]">
            <img
              src="https://via.placeholder.com/150" // Replace with your image link
              alt="Space 1"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            />
            <p className="text-xl font-medium text-center mt-4 dark:text-white">Title 1</p>
          </div>
  
          {/* Space 2 */}
          <div className="space-item w-full sm:w-[45%] lg:w-[30%]">
            <img
              src="https://via.placeholder.com/150" // Replace with your image link
              alt="Space 2"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            />
            <p className="text-xl font-medium text-center mt-4 dark:text-white">Title 2</p>
          </div>
  
          {/* Space 3 */}
          <div className="space-item w-full sm:w-[45%] lg:w-[30%]">
            <img
              src="https://via.placeholder.com/150" // Replace with your image link
              alt="Space 3"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            />
            <p className="text-xl font-medium text-center mt-4 dark:text-white">Title 3</p>
          </div>
  
          {/* Space 4 */}
          <div className="space-item w-full sm:w-[45%] lg:w-[30%]">
            <img
              src="https://via.placeholder.com/150" // Replace with your image link
              alt="Space 4"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            />
            <p className="text-xl font-medium text-center mt-4 dark:text-white">Title 4</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Spaces;
  