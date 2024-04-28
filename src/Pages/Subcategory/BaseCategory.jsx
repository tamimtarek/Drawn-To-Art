

const BaseCategory = ({category}) => {
    return (
        <div>

            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/1.jpg" className="object-cover w-full max-h-40" />
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            Article
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Supercharged
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                        </p>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default BaseCategory;