<?php
namespace AppBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

/**
 * @ORM\Entity
 */
class Contact
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $email;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $subject;

    /**
     * @var string
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    private $message;

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     * @Assert\NotNull
     */
    private $sentDate;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->sentDate = new DateTime();
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Contact
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return Contact
     */
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return string
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     * @return Contact
     */
    public function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @param string $message
     * @return Contact
     */
    public function setMessage($message)
    {
        $this->message = $message;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getSentDate()
    {
        return $this->sentDate;
    }

    /**
     * @param DateTime $sentDate
     * @return Contact
     */
    public function setSentDate(DateTime $sentDate)
    {
        $this->sentDate = $sentDate;
        return $this;
    }
}