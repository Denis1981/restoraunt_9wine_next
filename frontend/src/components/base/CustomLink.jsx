import Link from 'next/link'
import { useRouter} from 'next/router';

const CustomLink = ({children, href, ...props}) => {
    const router = useRouter(href)

    return (
        <Link
            href={href}
            style={{
                color: router ? 'var(--color-active)' : 'black',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}


export default CustomLink;