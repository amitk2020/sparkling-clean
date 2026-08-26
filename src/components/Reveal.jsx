import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current

        if (!element) return

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <Tag
            ref={elementRef}
            className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </Tag>
    )
}

export default Reveal