import Star from './Star';

function Stars({ count }) {
   return (
      <ul className='card-body-stars u-clearfix'>
         {Array(count)
            .fill()
            .map((_, i) => {
               return (
                  <li key={i}>
                     <Star />
                  </li>
               );
            })}
      </ul>
   );
}

export default Stars;
