<?php
namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

/**
 * @ApiResource(
 *  collectionOperations={"get"={"method"="GET"}},
 *  itemOperations={"get"={"method"="GET"}}
 * )
 * @ORM\Entity
 */
class Upload
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
    private $url;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $origFileName;

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     * @Assert\NotNull
     */
    private $createdDate;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createdDate = new DateTime();
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
    public function getOrigFileName()
    {
        return $this->origFileName;
    }

    /**
     * @param string $origFileName
     * @return Comment
     */
    public function setOrigFileName($origFileName)
    {
        $this->origFileName = $origFileName;
        return $this;
    }

    /**
     * @return string
     */
    public function getURL()
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return Comment
     */
    public function setURL($url)
    {
        $this->url = $url;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getCreatedDate()
    {
        return $this->createdDate;
    }

    /**
     * @param DateTime $createdDate
     * @return Comment
     */
    public function setCreatedDate($createdDate)
    {
        $this->createdDate = $createdDate;
        return $this;
    }
}
