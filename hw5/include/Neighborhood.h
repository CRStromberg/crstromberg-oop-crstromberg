#pragma once
#include <string>
#include <memory>

namespace city {
    class Neighborhood {
        private:
        float c_sqMiles;
        const std::string c_education;
        
        public:
        static const std::string DEFAULT_EDUCATION;
        Neighborhood(float sqMiles);
        Neighborhood(float sqMiles, const std::string &education);
        float sqMiles() const;
        const std::string& education() const;
        void sqMiles(float val);
        virtual ~Neighborhood();
    };
    typedef std::shared_ptr <Neighborhood> NeighborhoodPtr;
}